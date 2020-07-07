import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const Create = () => {
  const [state, setState] = useState({
    name: "",
    type: "",
    served: "",
    abv: "",
    brewery: "",
    brewCity: "",
    brewState: "",
    brewSize1: "",
    brewSize1Price: "",
    brewSize2: "",
    brewSize2Price: "",
    brewSize3: "",
    brewSize3Price: "",
    brewSize4: "",
    brewSize4Price: "",
    brewSize5: "",
    brewSize5Price: "",
    description: "",
    user: "",
  });

  // destructured state values
  const {
    name,
    type,
    served,
    abv,
    brewery,
    brewCity,
    brewState,
    brewSize1,
    brewSize1Price,
    brewSize2,
    brewSize2Price,
    brewSize3,
    brewSize3Price,
    brewSize4,
    brewSize4Price,
    brewSize5,
    brewSize5Price,
    description,
    user,
  } = state;

  //  onchange event handler (NEW)
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  // OLD Function
  //   function handleChange(name) {
  //     function doo(event) {
  //       setState({ ...state, [name]: event.target.value });
  //     }
  //     return doo;
  //   }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/post`, {
        name,
        type,
        served,
        abv,
        brewery,
        brewCity,
        brewState,
        brewSize1,
        brewSize1Price,
        brewSize2,
        brewSize2Price,
        brewSize3,
        brewSize3Price,
        brewSize4,
        brewSize4Price,
        brewSize5,
        brewSize5Price,
        description,
        user,
      })
      .then((response) => {
        console.log(response);
        // empty the state
        setState({
          ...state,
          name: "",
          type: "",
          served: "",
          abv: "",
          brewery: "",
          brewCity: "",
          brewState: "",
          brewSize1: "",
          brewSize1Price: "",
          brewSize2: "",
          brewSize2Price: "",
          brewSize3: "",
          brewSize3Price: "",
          brewSize4: "",
          brewSize4Price: "",
          brewSize5: "",
          brewSize5Price: "",
          description: "",
          user: "",
        });
        //show success
        alert(`Post name ${response.data.name} was created by ${response.data.user}`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="container p-5">
      <Nav />
      <h1>Add New Beer</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input onChange={handleChange("name")} value={name} type="text" className="form-control" placeholder="What is this beer's name?" required />
        </div>

        <div className="brew-basics">
          <div className="form-group brew-type">
            <label className="text-muted">Type</label>
            <input onChange={handleChange("type")} value={type} type="text" className="form-control" placeholder="e.g. IPA, Lager, Stout, etc" required />
          </div>
          <div className="form-group brew-abv">
            <label className="text-muted">ABV</label>
            <input onChange={handleChange("abv")} value={abv} type="text" className="form-control" placeholder="e.g. 6.5%" />
          </div>
        </div>

        <div className="form-group">
          <label className="text-muted">Brewery</label>
          <input onChange={handleChange("brewery")} value={brewery} type="text" className="form-control" placeholder="What Brewery makes this beer?" />
        </div>

        <div className="form-group">
          <label className="text-muted">Brewery Location</label>
          <div className="brewery-location-container">
            <input onChange={handleChange("brewCity")} value={brewCity} type="brewCity" className="form-control" placeholder="Brewery City?" />
            <select onChange={handleChange("brewState")} type="brewCity" className="form-control">
              <option value="NA">State</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
          </div>
        </div>

        <div className="servin-size-container">
          <div className="form-group serving-size">
            <label className="text-muted">Serving Size</label>
            <input onChange={handleChange("brewSize1")} value={brewSize1} className="form-control" placeholder="e.g. pint, 12oz, 8ox, etc" required />
          </div>

          <div className="form-group serving-price">
            <label className="text-muted">Price</label>
            <input onChange={handleChange("brewSize1Price")} value={brewSize1Price} className="form-control" placeholder="e.g. $5" required />
          </div>
        </div>

        <div className="servin-size-container serv-size-hidden">
          <div className="form-group serving-size">
            <label className="text-muted">Serving Size</label>
            <input onChange={handleChange("brewSize2")} value={brewSize2} className="form-control" placeholder="e.g. pint, 12oz, 8ox, etc" required />
          </div>

          <div className="form-group serving-price">
            <label className="text-muted">Price</label>
            <input onChange={handleChange("brewSize2Price")} value={brewSize2Price} className="form-control" placeholder="e.g. $5" required />
          </div>
        </div>

        <div className="servin-size-container serv-size-hidden">
          <div className="form-group serving-size">
            <label className="text-muted">Serving Size</label>
            <input onChange={handleChange("brewSize3")} value={brewSize3} className="form-control" placeholder="e.g. pint, 12oz, 8ox, etc" required />
          </div>

          <div className="form-group serving-price">
            <label className="text-muted">Price</label>
            <input onChange={handleChange("brewSize3Price")} value={brewSize3Price} className="form-control" placeholder="e.g. $5" required />
          </div>
        </div>

        <div className="servin-size-container serv-size-hidden">
          <div className="form-group serving-size">
            <label className="text-muted">Serving Size</label>
            <input onChange={handleChange("brewSize4")} value={brewSize4} className="form-control" placeholder="e.g. pint, 12oz, 8ox, etc" required />
          </div>

          <div className="form-group serving-price">
            <label className="text-muted">Price</label>
            <input onChange={handleChange("brewSize4Price")} value={brewSize4Price} className="form-control" placeholder="e.g. $5" required />
          </div>
        </div>

        <div className="servin-size-container serv-size-hidden">
          <div className="form-group serving-size">
            <label className="text-muted">Serving Size</label>
            <input onChange={handleChange("brewSize5")} value={brewSize5} className="form-control" placeholder="e.g. pint, 12oz, 8ox, etc" required />
          </div>

          <div className="form-group serving-price">
            <label className="text-muted">Price</label>
            <input onChange={handleChange("brewSize5Price")} value={brewSize5Price} className="form-control" placeholder="e.g. $5" required />
          </div>
        </div>

        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea onChange={handleChange("description")} value={description} className="form-control" placeholder="Describe this beer..." required />
        </div>

        <div className="form-group">
          <label className="text-muted">User</label>
          <input onChange={handleChange("user")} value={user} type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <button className="btn">Add Beer</button>
      </form>
    </div>
  );
};

export default Create;
