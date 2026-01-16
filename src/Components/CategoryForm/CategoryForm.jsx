import {useContext, useEffect, useState} from "react";
import {assets} from "../../assets/assets.js";
import toast from "react-hot-toast";
import AppContext from "../../context/AppContext.jsx";
import {addCategory} from "../../Service/CategoryService.js";

const CategoryForm = () => {

    const {setCategories , categories} = useContext(AppContext);

    const [laoding, setLaoding] = useState(false);
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        bgcolor:"#000000",
    });

    useEffect(() => {
        console.log(data);
    },[data]);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data) => ({...data, [name]: value}));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLaoding(true);
        if(! image){
            toast.error("Select Category Image");
            setLaoding(false);
            return;
        }
        setLaoding(true);
        const formData = new FormData();
        formData.append("category" , JSON.stringify(data));
        formData.append("file" , image);
        try{
            const reponse = await addCategory(formData);
            if(reponse.status===201){
                setCategories([...categories, reponse.data]);
                toast.success("Category Added Sucessfully!");
                setData({
                    name: "",
                    description: "",
                    bgcolor: "#000000",
                });
                setImage(false);
            }
        }catch(error){
            console.error(error);
            toast.error("Error adding Category");
        }finally {
            setLaoding(false);
        }




    }

    return(
        
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-12 form-container">
                    <div className="card-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                 <label htmlFor="image" className="form-label">
                                <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={48} />
                                </label>
                                <input type="file" name="image" id="image" className="form-control" hidden onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text"
                                       name="name"
                                       id="name"
                                       className="form-control"
                                       placeholder="Category Name"
                                       onChange={onChangeHandler}
                                       value={data.name}

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Description</label>
                                <textarea rows="5"
                                          name="description"
                                          id="description"
                                          className="form-control"
                                          placeholder="Write content here...."
                                          onChange={onChangeHandler}
                                          value={data.description}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="bgcolor" className="form-label">Background color</label>
                                <br />
                                <input type="color"
                                       name="bgcolor"
                                       id="bgColor"
                                       onChange={onChangeHandler}
                                       value={data.bgcolor}
                                       placeholder="#ffffff" />
                            </div>

                            <button type="submit"
                                    disabled={laoding}
                                    className="btn btn-warning w-100">{laoding ? "Loading...." : "Submit"}</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default CategoryForm;