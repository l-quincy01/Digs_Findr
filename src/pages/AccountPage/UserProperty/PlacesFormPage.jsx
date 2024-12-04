import Perks from "../../../components/Perks";
import PhotoUploader from "../../../components/PhotoUploader";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNavigation from "../../../components/AccountPage/AccountNavigation";
import { Navigate, useParams } from "react-router-dom";
import { MdApartment } from "react-icons/md";
import Furniture from "../../../components/Furniture";
import PrefferedTenants from "../../../components/PrefferedTenants";
// import { FaHouseUser } from "react-icons/fa";
// import { BsBuildingsFill } from "react-icons/bs";
// import { GiFamilyHouse } from "react-icons/gi";

export default function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [listedBy] = "Digs Findr";
  const [propertyType, setPropertyType] = useState("");
  const [placeOffers, setPlaceOffers] = useState([]);

  const [description, setDescription] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  // const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [furnitureIncluded, setFurnitureIncluded] = useState([]);
  const [preferredTenants, setPreferredTenants] = useState([]);

  const [redirect, setRedirect] = useState(false);
  const [price, setPrice] = useState(100);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setPropertyType(data.propertyType);
      setPlaceOffers(data.placeOffers);

      setDescription(data.description);
      setAddedPhotos(data.photos);
      // setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setFurnitureIncluded(data.furnitureIncluded);
      setPreferredTenants(data.preferredTenants);

      setPrice(data.price);
    });
  }, [id]);

  function inputHead(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <div>
        {inputHead(header)}
        {inputDescription(description)}
      </div>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      listedBy,
      propertyType,
      placeOffers,
      addedPhotos,
      description,
      extraInfo,
      furnitureIncluded,
      preferredTenants,
      price,
    };

    if (id) {
      await axios.put("/places/:id", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/places/new", { placeData });
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  function propertyTypeSelector(value) {
    return `cursor-pointer flex flex-col items-center justify-center max-w-md p-6 border border-gray-200 rounded-lg shadow   ${
      propertyType === value ? "bg-primary text-white" : "bg-white"
    }`;
  }

  function togglePropertyType(value) {
    setPropertyType(propertyType === value ? "" : value);
  }

  return (
    <div>
      <AccountNavigation />

      <form className="p-6" onSubmit={savePlace}>
        {preInput("Title", "Give your accomodation a suitable heading")}
        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="Title: Your accomodation's title"
        />

        {preInput("Address", "Give the physical address of your accomodation")}
        <input
          type="text"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          placeholder="Title: Your accomodation's address"
        />

        {preInput(
          "Property type",
          "What type of property best describes where you are listing your available rooms?"
        )}
        <div className="flex justify-center items-center gap-4 pt-2">
          <div
            className={propertyTypeSelector("House")}
            onClick={() => togglePropertyType("House")}
          >
            <input type="text" className="hidden" value="House" />
            <MdApartment /> House
          </div>

          <div
            className={propertyTypeSelector("Student Residence")}
            onClick={() => togglePropertyType("Student Residence")}
          >
            <input type="text" className="hidden" value="House" />
            <MdApartment /> Student Residence
          </div>

          <div
            className={propertyTypeSelector("Apartment")}
            onClick={() => togglePropertyType("Apartment")}
          >
            <input type="text" className="hidden" value="House" />
            <MdApartment /> Apartment
          </div>

          <div
            className={propertyTypeSelector("Flat Let")}
            onClick={() => togglePropertyType("Flat Let")}
          >
            <input type="text" className="hidden" value="House" />
            <MdApartment /> Flat Let
          </div>
        </div>

        {preInput("Photos", "Add captivating photos for your accomodation")}
        <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput("Description", "Add Description for your accomodation")}
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>

        {preInput(
          "Place offers",
          "Select all the perks that your accomodation offers"
        )}
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <Perks selected={placeOffers} onChange={setPlaceOffers} />
        </div>

        {preInput("Extra info", "House rules")}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        ></textarea>

        {preInput(
          "Furniture & appliances included",
          "Select the furniture included with your place"
        )}
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <Furniture
            selected={furnitureIncluded}
            onChange={setFurnitureIncluded}
          />
        </div>

        {preInput(
          "Preffered Tenants ",
          "Select the tenants you prefer to stay at your place"
        )}
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <PrefferedTenants
            selected={preferredTenants}
            onChange={setPreferredTenants}
          />
        </div>
        <div className="grid  grid-cols-3 gap-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Price / month </h3>
            <input
              type="number"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
              placeholder="5 Guests"
            />
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
