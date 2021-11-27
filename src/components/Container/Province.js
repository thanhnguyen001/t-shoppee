import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function Province(props) {

    const { onUpdateAddress } = props;

    const [listAddress, setListAddress] = useState();
    const listDefault = useRef([])
    const type = useRef("p");
    const address = useRef("");
    const fullAddress = useRef("");
    const currentDistrict = useRef();

    useEffect(() => {
        fetchAddress();
    }, [])

    const fetchAddress = async (slug = "/?depth=3") => {
        try {
            const response = await axios.get(`https://provinces.open-api.vn/api${slug}`);
            // console.log(response);
            setListAddress(response.data);
            listDefault.current = response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleUpdateAddress = (item) => {
        if (type.current === "p") {
            address.current = item.name;
            type.current = "d";
            currentDistrict.current = [...item.districts];
            setListAddress(item.districts);
        }
        else if (type.current === "d") {
            address.current = item.name;
            fullAddress.current += address.current + ", ";
            type.current = "w";
            setListAddress(item.wards);
        }
        else if (type.current === "w") {
            fullAddress.current = address.current + ", " + item.name;
            onUpdateAddress(fullAddress.current);
            type.current = "p";
            fullAddress.current = "";
            address.current = "";
            setListAddress(listDefault.current);
        }
    }

    const handleChangePrevProvince = () => {
        if (type.current === "d") {
            type.current = "p";
            fullAddress.current = "";
            setListAddress(listDefault.current);
        }
        else if (type.current === "w") {
            type.current = "d";
            fullAddress.current = address.current;
            setListAddress(currentDistrict.current);
        }
    }

    const renderAddress = (list) => {
        // if (!list) return;
        return list.map((item, index) => {
            return <li key={index} className="province-item"
                onClick={() => handleUpdateAddress(item)}
            >
                {item.name}
            </li>
        })
    }

    return (
        <ul className="list-province">
            {address.current && <li style={{ color: 'red' }} className="province-item" onClick={handleChangePrevProvince}>{`< ${address.current}`}</li>}
            {listAddress && listAddress.length > 0 && renderAddress(listAddress)}
        </ul>
    )
}

export default Province
