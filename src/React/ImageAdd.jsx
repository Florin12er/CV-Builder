import React, { useState } from "react";

export function ImageAdd() {
    const [backgroundImage, setBackgroundImage] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="ImageAdd">
                <h3>Choose Photo</h3>
                <div className="AddSvg">
                    <label htmlFor="imageInput">
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <title>plus-circle</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs></defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Icon-Set-Filled"
                                    transform="translate(-466.000000, -1089.000000)"
                                    fill="#000000"
                                >
                                    <path
                                        d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z"
                                        id="plus-circle"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </label>
                    <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
            <div
                className="Circle"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                }}
            ></div>
        </>
    );
}
