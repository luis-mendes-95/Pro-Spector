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

  const { currentConversionId, setConversionsByRequest, ShowEditConversionForm, conversions, SetConversion, currentConversion, ShowClientDetailsForm, currentClientId } = useContext(DashboardContext)

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

  const thisConversion = currentConversion

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iConversion>({ resolver: yupResolver(ConversionSchema) });

  const submit = async (data: any) => {

    let dataString = new Date().toLocaleDateString('en-US').replace(/\//g, '-');

    data.createdAt = currentConversion.createdAt
    data.updatedAt = dataString
    data.deletedAt = ""
    data.clientId = currentClientId
 
    try {
      const token = localStorage.getItem("prospector_user_token");
  
      const response = await api.patch(`/conversions/${currentConversionId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.status)

      if (response.status === 200) {
        toast.success("Conversão editada com sucesso!")

        try {
          const token = localStorage.getItem("prospector_user_token");

          const response = await api.get("/conversions", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          setConversionsByRequest(response.data)
  
        } catch (error) {
          console.log(error);
        }

      }

    } catch (error: any) {
      if (error) {
        console.log(error)
        toast.error("ops! Alguma coisa está errada! Atualize a página e tente novamente!")
      }
    } 

    setTimeout(() => {
      ShowEditConversionForm(currentConversionId)
    }, 2000);

    SetConversion("")

    ShowClientDetailsForm(currentClientId)
    

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
            defaultValue={thisConversion?.value}
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
            defaultValue={thisConversion?.details}
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
            ShowEditConversionForm(currentConversionId)
            ShowClientDetailsForm(currentClientId)
            SetConversion("")
          }} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default EditConversionForm;
