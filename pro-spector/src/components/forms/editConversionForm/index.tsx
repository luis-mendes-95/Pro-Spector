import Modal from "../../modal";
import { useContext, useEffect, useState } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iConversion } from "../../../interfaces/conversion";
import "react-toastify/dist/ReactToastify.css";
import { ConversionSchema } from "../../../schemas/conversion";
import { DashboardContext } from "../../../contexts/dashboard";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const EditConversionForm = () => {

  const { currentConversionId, setConversionsByRequest, conversions, SetConversion, currentConversion } = useContext(DashboardContext)

  useEffect(() => {

    const getConversions = async () => {

      try {
        const token = localStorage.getItem("prospector_user_token");
        const response = await api.get("/conversions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allConversions = response.data
        setConversionsByRequest(allConversions)

        response.data.map((data: any)=>{
          if (data.id === currentConversionId) {
            SetConversion(data)
          }
        })

      } catch (error) {
        console.log(error);
      }  
      
    };

    getConversions();
    
  }, []);

  const { ShowEditConversionForm } = useContext(DashboardContext);

  console.log(currentConversion)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iConversion>({ resolver: yupResolver(ConversionSchema) });

  const submit = (data: iConversion) => {
    console.log("This is the data to send request:");
    console.log(data);
  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>EDIT CONVERSION PROCESS:</h2>

        {/* <div className="divLabelAndInput">
          <label>Title:</label>
          <input
            defaultValue="400 T-Shirts to 200 employes"
            placeholder="Choose a title for this process"
            {...register("title")}
          />
        </div>
        {errors.title?.message && (
          <p className="pError" aria-label="error">
            {errors.title.message}
          </p>
        )} */}

        <div className="divLabelAndInput">
          <label>Value:</label>
          <input placeholder="Type the value in negotiation" type="number" {...register("value")} 
            defaultValue={currentConversion?.value}
          />
        </div>
        {errors.value?.message && (
          <p className="pError" aria-label="error">
            {errors.value.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Details:</label>
          <textarea placeholder="Fill this info with all present and future information about this negotiation" {...register("details")} 
            defaultValue={currentConversion?.details}
          />
        </div>
        {errors.details?.message && (
          <p className="pError" aria-label="error">
            {errors.details.message}
          </p>
        )}

        {/* <div className="divLabelAndInput">
          <label>Sucess:</label>
          <input {...register("sucess")} type="checkbox" />
        </div>
        {errors.sucess?.message && (
          <p className="pError" aria-label="error">
            {errors.sucess.message}
          </p>
        )} */}

        <div className="DivButtonsReg">
          <button type="submit" className="buttonSaveReg">
            Save
          </button>

          <button onClick={()=>{
            ShowEditConversionForm(0)
          }} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default EditConversionForm;
