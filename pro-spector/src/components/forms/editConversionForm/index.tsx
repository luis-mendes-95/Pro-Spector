import Modal from "../../modal";
import { useContext, useEffect } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iConversion } from "../../../interfaces/conversion";
import "react-toastify/dist/ReactToastify.css";
import { ConversionSchema } from "../../../schemas/conversion";
import { DashboardContext } from "../../../contexts/dashboard";
import api from "../../../services/api";

const EditConversionForm = () => {

  const { currentConversionId, setConversionsByRequest, ShowEditConversionForm, SetConversion, currentConversion, ShowClientDetailsForm,
     currentClientId } = useContext(DashboardContext)

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

        response.data.map((data: iConversion) => {

          if (data.id === currentConversionId) {
            SetConversion(data)
          }

          return ""

        })

      } catch (error) {
        console.log(error);
      }  
      
    };
    getConversions();

  }, []);

  const thisConversion = currentConversion

  const { register, handleSubmit, formState: { errors }} = useForm<iConversion>({ resolver: yupResolver(ConversionSchema) });

  const submit = async (data: iConversion) => {

    let dataString = new Date().toLocaleDateString('en-US').replace(/\//g, '-');

    if (data.value === "") {
      data.value = currentConversion.value
    }

    if (data.details === "") {
      data.details = currentConversion.details
    }

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

        <div className="divLabelAndInput">

          <label>Value:</label>
          <input placeholder="Type the value in negotiation" type="string" {...register("value")} 
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
