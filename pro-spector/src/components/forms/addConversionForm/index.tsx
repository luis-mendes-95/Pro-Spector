import Modal from "../../modal";
import { useContext } from "react";
import { FormStyle } from "../../../styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { iConversion } from "../../../interfaces/conversion";
import "react-toastify/dist/ReactToastify.css";
import { ConversionSchema } from "../../../schemas/conversion";
import { DashboardContext } from "../../../contexts/dashboard";
import api from "../../../services/api";

const AddConversionForm = () => {
  
  const { currentClientId, ShowAddConversionForm, ShowClientDetailsForm } = useContext(DashboardContext);

  const { register, handleSubmit, formState: { errors } } = useForm<iConversion>({ resolver: yupResolver(ConversionSchema) });

  const submit = async (data: iConversion) => {

    data.clientId = currentClientId

    let dataString = new Date().toLocaleDateString('en-US').replace(/\//g, '-');

    data.createdAt = dataString
    data.updatedAt = dataString
    data.deletedAt = ""
 
    try {

      const token = localStorage.getItem("prospector_user_token");
  
      const response = await api.post("/conversions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Conversão cadastrada com sucesso!")
      }

    } catch (error: any) {
      if (error) {
        console.log(error)
        toast.error("ops! Alguma coisa está errada! Atualize a página e tente novamente!")
      }
    } 

    setTimeout(() => {
      ShowAddConversionForm()
      ShowClientDetailsForm(1)
    }, 2000);

  };

  return (
    <Modal>
      <FormStyle onSubmit={handleSubmit(submit)}>
        <h2>ADD NEW CONVERSION PROCESS:</h2>

        <div className="divLabelAndInput">
          <label>Value:</label>
          <input placeholder="Type the value in negotiation" type="number" {...register("value")} />
        </div>
        {errors.value?.message && (
          <p className="pError" aria-label="error">
            {errors.value.message}
          </p>
        )}

        <div className="divLabelAndInput">
          <label>Details:</label>
          <textarea placeholder="Fill this info with all present and future information about this negotiation" {...register("details")} />
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

          <button onClick={ShowAddConversionForm} className="buttonCancelReg">
            Close
          </button>
        </div>
      </FormStyle>
    </Modal>
  );
};

export default AddConversionForm;
