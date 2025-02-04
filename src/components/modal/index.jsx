import {
    Container,
    Footer,
    Wrapper,
    WrapperBody,
    WrapperLeft,
    WrapperRight,
    WrapperTop,
} from "./style";
import { createPortal } from "react-dom";
import { Box, Path } from "../table/style";
import Title from "../Generic/title";
import GenericButton from "../Generic/button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { TextField } from "@mui/material";

const ModalCard = (props) => {
    const categoryRef = useRef('');
    const modelRef = useRef('');
    const priceRef = useRef('');
    const engineRef = useRef('');
    const yearRef = useRef('');
    const colorRef = useRef('');
    const distanceRef = useRef('');
    const descriptionRef = useRef('');
    const tintingRef = useRef('');
    const imagesRef = useRef([]);
    const [types, setTypes] = useState([]);

    const token = Cookies.get("token");
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    useEffect(() => {
        axios
            .get("https://cars-1-pku7.onrender.com/categories", config)
            .then((res) => {
                setTypes(res.data);
            })
            .catch((err) => {
                console.error("Error fetching categories:", err);
            });
    }, []);

    const saveHandler = async () => {
        const model = modelRef.current.value;
        const tinting = tintingRef.current.value;
        const engine = engineRef.current.value;
        const color = colorRef.current.value;
        const year = yearRef.current.value;
        const distance = distanceRef.current.value;
        const price = priceRef.current.value;
        const category = categoryRef.current.value;
        const description = descriptionRef.current.value;
        const images = imagesRef.current.files;

        if (!model || !tinting || !engine || !color || !year || !distance || !price || !category || !description || images.length === 0) {
            alert("Barcha maydonlarni to'ldiring!");
            return;
        }

        const selectedCategory = types.find(cat => cat.brand === category);
        if (!selectedCategory) {
            alert("Kategoriya topilmadi!");
            return;
        }

        const tintingValue = tinting === "true" ? "yes" : "no";
        const formData = new FormData();
        formData.append("model", model);
        formData.append("engine", Number(engine));
        formData.append("color", color);
        formData.append("year", Number(year));
        formData.append("distance", Number(distance));
        formData.append("price", Number(price));
        formData.append("tinting", tintingValue);
        formData.append("description", description);
        formData.append("category", selectedCategory._id);

        for (const image of images) {
            formData.append("images", image);
        }

        try {
            const response = await axios.post(
                `https://cars-1-pku7.onrender.com/add_car`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Muvaffaqiyatli qo‘shildi:", response.data);
            props.onClose();
        } catch (error) {
            console.error("Xatolik yuz berdi:", error.response ? error.response.data : error.message);
        }
    };

    return props.status
        ? createPortal(
            <Container>
                <Wrapper>
                    <WrapperTop>
                        <Path>
                            <Box bg="#CABDFF" /> Mashinalar
                        </Path>
                        {props.children}
                    </WrapperTop>

                    <WrapperBody>
                        <WrapperLeft>
                            <Title mb={6} mt={0}>Markasi</Title>
                            <select ref={categoryRef} style={selectStyle}>
                                <option selected disabled>Kategoriya tanlang</option>
                                {types.map((value) => (
                                    <option key={value._id} value={value.brand}>
                                        {value.brand}
                                    </option>
                                ))}
                            </select>

                            <Title mb={6} mt={26}>Nomi</Title>
                            <TextField inputRef={modelRef} size="small" placeholder="Kiriting" sx={textFieldStyle} />

                            <Title mb={6} mt={26}>Mator</Title>
                            <TextField inputRef={engineRef} type="number" size="small" placeholder="Kiriting" sx={textFieldStyle} />

                            <Title mb={6} mt={26}>Rang</Title>
                            <TextField inputRef={colorRef} size="small" placeholder="Kiriting" sx={textFieldStyle} />

                            <Title mb={6} mt={26}>Rasm</Title>
                            <TextField inputRef={imagesRef} type="file" multiple size="small" sx={textFieldStyle} />

                            <Title mb={6} mt={26}>Izoh</Title>
                            <textarea ref={descriptionRef} placeholder="Qo'shimcha malumot" style={textAreaStyle} />
                        </WrapperLeft>

                        <WrapperRight>
                            <Title mb={6} mt={0}>Tanirovka</Title>
                            <select ref={tintingRef} style={selectStyle}>
                                <option selected disabled>Tanlang</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                            <Title mb={6} mt={26}>Yil</Title>
                            <TextField inputRef={yearRef} type="number" size="small" placeholder="Kiriting" sx={textFieldStyle} />

                            <Title mb={6} mt={26}>Masofa</Title>
                            <TextField inputRef={distanceRef} type="number" size="small" placeholder="Kiriting" sx={textFieldStyle} />

                            <Title mb={6} mt={26}>Narxi</Title>
                            <TextField inputRef={priceRef} type="number" size="small" placeholder="Kiriting" sx={textFieldStyle} />
                        </WrapperRight>
                    </WrapperBody>

                    <Footer>
                        <GenericButton onClick={saveHandler} width={155}>Saqlash</GenericButton>
                    </Footer>
                </Wrapper>
            </Container>,
            document.body
        )
        : null;
};

export default ModalCard;
const textFieldStyle = {
    m: 0,
    width: "400px",
    backgroundColor: "#F4F4F4",
    borderRadius: 2,
    "& fieldset": { border: "none" },
};

const textAreaStyle = {
    fontFamily: '"Inter", serif',
    width: 400,
    height: 150,
    borderRadius: 10,
    fontSize: "17px",
    padding: 12,
    backgroundColor: "#F4F4F4",
    border: "none",
    outline: "none",
};

const selectStyle = {
    width: 400,
    height: 40,
    paddingLeft: 8,
    borderRadius: 12,
    outline: "none",
    border: "none",
    backgroundColor: "#F4F4F4",
    color: "black",
    fontSize: 15,
    fontWeight: 700,
};