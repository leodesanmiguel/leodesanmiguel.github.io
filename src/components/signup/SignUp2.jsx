import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

export function SignUp2() {
  const [data, setData] = useState({
    myname: "",
    myemail: "",
    mypassword: "",
  });

  const handleChangeData = (e) => {
    console.log(e);
    setData((prevState) => {
      console.log(prevState.name);
      return e.target.name === "terms"
        ? {
            ...prevState,
            [e.target.name]: e.target.checked,
          }
        : {
            ...prevState,
            [e.target.name]: e.target.value,
          };
    });
  };

  const handE = (ev) => {
    ev.preventDefault();
    console.log("input....: ", ev.target.buscar.value);
    console.log("NOMBRE...: ", ev.target.nombre.value);
    // console.log("EMAIL....: ", ev.target.email.value);
    // console.log("PASSWORD.: ", ev.target.name.value);
    // console.log("TERMS....: ", ev.target.name.value);
  };

  return (
    <>
      <div className="my-[30px] bg-white">
        <form onSubmit={handE}>
          <input
            role="form text-left"
            type="text"
            name="buscar"
            autoComplete="off"
            placeholder="escribi algoi"
          ></input>
          <Input
            name="myname"
            onChange={handleChangeData}
            value={data.myname}
            size="lg"
            label="Nombre"
          />

          {/* <div className="mb-4 flex flex-col gap-6">
          <Input
            name="myname"
            onChange={handleChangeData}
            value={data.myname}
            size="lg"
            label="Name"
          />
          <Input
            name="myemail"
            onChange={handleChangeData}
            value={data.myemail}
            size="lg"
            label="Email"
          />
          <Input
            name="mypassword"
            onChange={handleChangeData}
            value={data.mypassword}
            type="password"
            size="lg"
            label="Password"
          />
        </div> */}
       <Button className="my-6 " fullWidth type="submit" >
          Register
        </Button>

        </form>
      </div>
    </>
  );
}
