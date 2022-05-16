import React, { useState } from "react";
import { useForm } from "react-hook-form";
const SubmissionForm = () => {
 const { register, handleSubmit } = useForm();
 const [result, setResult] = useState("");
 const onSubmit = (data) => setResult(JSON.stringify(data));
 return (
 <form onSubmit={handleSubmit(onSubmit)}>

 <p><b>Title:</b></p>
 <input {...register("title")} placeholder="Title" /><p></p>
 <p><b>Authors:</b></p>
 <input {...register("authors")} placeholder="Authors" /><p></p>
 <p><b>Publication Year:</b></p>
 <input {...register("pubyear")} placeholder="Publication Year" /><p></p>
 <p><b>DOI:</b></p>
 <input {...register("doi")} placeholder="DOI" />

 <br></br>
 <br></br>


 <select {...register("sepractice")}>
 <option value="">Select SE practice...</option>
 <option value="TDD">TDD</option>
 <option value="Mob Programming">Mob Programmin</option>
 </select>
 <p>{result}</p>
 <input type="submit" />
 </form>
 );
}
export default SubmissionForm;