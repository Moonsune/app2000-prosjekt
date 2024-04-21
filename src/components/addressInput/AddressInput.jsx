// laget av Markus Magnussen

// components/AddressInput.js
import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const AddressInput = () => {
    const [address, setAddress] = useState("");
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAOkuhwtufDMuWGQahwbpFdavzvE8GdTII", // Replace with your API key
        libraries,
    });

    if (!isLoaded) return <div>Loading...</div>;
    console.log("google api", process.env.MAPS_API)
    return (

        <div>
            <Autocomplete
                onSelect={selected => setAddress(selected.description)}
            >
                <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Enter your address"
                />
            </Autocomplete>
        </div>
    );
};

export default AddressInput;
