import React, { useEffect } from "react";
import config from '../public/config.json';

export default function Form() {
    useEffect(() => {
        const submitHandler = (event) => {
            event.preventDefault();
            const container = event.target.parentNode;
            const form = container.querySelector(".newsletter-form");
            const formInput = container.querySelector(".newsletter-form-input");
            const success = container.querySelector(".newsletter-success");
            const errorContainer = container.querySelector(".newsletter-error");
            const errorMessage = container.querySelector(".newsletter-error-message");
            const backButton = container.querySelector(".newsletter-back-button");
            const submitButton = container.querySelector(".newsletter-form-button");
            const loadingButton = container.querySelector(".newsletter-loading-button");

            const rateLimit = () => {
                errorContainer.style.display = "flex";
                errorMessage.innerText =
                    "Too many signups, please try again in a little while";
                submitButton.style.display = "none";
                formInput.style.display = "none";
                backButton.style.display = "block";
            };

            const time = new Date();
            const timestamp = time.valueOf();
            const previousTimestamp = localStorage.getItem("loops-form-timestamp");

            if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
                rateLimit();
                return;
            }
            localStorage.setItem("loops-form-timestamp", timestamp);

            submitButton.style.display = "none";
            loadingButton.style.display = "flex";

            const formBody =
                "userGroup=PocketPantry&mailingLists=&email=" +
                encodeURIComponent(formInput.value);
            fetch(event.target.action, {
                method: "POST",
                body: formBody,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
                .then((res) => [res.ok, res.json(), res])
                .then(([ok, dataPromise, res]) => {
                    if (ok) {
                        success.style.display = "flex";
                        form.reset();
                    } else {
                        dataPromise.then((data) => {
                            errorContainer.style.display = "flex";
                            errorMessage.innerText = data.message
                                ? data.message
                                : res.statusText;
                        });
                    }
                })
                .catch((error) => {
                    if (error.message === "Failed to fetch") {
                        rateLimit();
                        return;
                    }
                    errorContainer.style.display = "flex";
                    if (error.message) errorMessage.innerText = error.message;
                    localStorage.setItem("loops-form-timestamp", "");
                })
                .finally(() => {
                    formInput.style.display = "none";
                    loadingButton.style.display = "none";
                    backButton.style.display = "block";
                });
        };

        const resetFormHandler = (event) => {
            const container = event.target.parentNode;
            const formInput = container.querySelector(".newsletter-form-input");
            const success = container.querySelector(".newsletter-success");
            const errorContainer = container.querySelector(".newsletter-error");
            const errorMessage = container.querySelector(".newsletter-error-message");
            const backButton = container.querySelector(".newsletter-back-button");
            const submitButton = container.querySelector(".newsletter-form-button");

            success.style.display = "none";
            errorContainer.style.display = "none";
            errorMessage.innerText =
                "Oops! Something went wrong, please try again";
            backButton.style.display = "none";
            formInput.style.display = "flex";
            submitButton.style.display = "flex";
        };

        const formContainers = document.getElementsByClassName(
            "newsletter-form-container"
        );

        for (let i = 0; i < formContainers.length; i++) {
            const formContainer = formContainers[i];
            const handlersAdded = formContainer.classList.contains(
                "newsletter-handlers-added"
            );
            if (handlersAdded) continue;
            formContainer
                .querySelector(".newsletter-form")
                .addEventListener("submit", submitHandler);
            formContainer
                .querySelector(".newsletter-back-button")
                .addEventListener("click", resetFormHandler);
            formContainer.classList.add("newsletter-handlers-added");
        }
    }, []);

    return (
        <div>
            {/* <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
            </style> */}
            <div className="newsletter-form-container">
                <form
                    className="newsletter-form"
                    action="https://app.loops.so/api/newsletter-form/clybpq46a00hot224b8btu12w"
                    method="POST"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <input
                        className="newsletter-form-input"
                        name="newsletter-form-input"
                        type="email"
                        placeholder="you@example.com"
                        required
                        style={{
                            //fontFamily: "Inter, sans-serif",
                            color: "rgb(0, 0, 0)",
                            fontSize: "14px",
                            margin: "0 10px 0 0",
                            width: "100%",
                            maxWidth: "300px",
                            minWidth: "100px",
                            background: "rgb(255, 255, 255)",
                            border: "1px solid black",
                            boxSizing: "border-box",
                            //boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                            borderRadius: "10px",
                            padding: "12px 14px",
                        }}
                    />
                    <button
                        type="submit"
                        className="newsletter-form-button"
                        style={{
                            background: config.primaryColor,
                            fontSize: "14px",
                            color: "rgb(255, 255, 255)",
                            fontFamily: "Inter, sans-serif",
                            display: "flex",
                            width: "min-content",
                            maxWidth: "300px",
                            whiteSpace: "nowrap",
                            height: "38px",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            padding: "9px 17px",
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                            borderRadius: "10px",
                            textAlign: "center",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "20px",
                            border: "medium",
                            cursor: "pointer",
                        }}
                    >
                        Subscribe!
                    </button>
                    <button
                        type="button"
                        className="newsletter-loading-button"
                        style={{
                            background: config.primaryColor,
                            fontSize: "14px",
                            color: "rgb(255, 255, 255)",
                            fontFamily: "Inter, sans-serif",
                            display: "none",
                            width: "min-content",
                            maxWidth: "300px",
                            whiteSpace: "nowrap",
                            height: "38px",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            padding: "9px 17px",
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                            borderRadius: "6px",
                            textAlign: "center",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "20px",
                            border: "medium",
                            cursor: "pointer",
                        }}
                    >
                        Please wait...
                    </button>
                </form>
                <div
                    className="newsletter-success"
                    style={{
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <p
                        className="newsletter-success-message"
                        style={{
                            fontFamily: "Inter, sans-serif",
                            color: "rgb(43, 193, 63)",
                            fontSize: "14px",
                        }}
                    >
                        👋 Thanks! We'll be in touch!
                    </p>
                </div>
                <div
                    className="newsletter-error"
                    style={{
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <p
                        className="newsletter-error-message"
                        style={{
                            fontFamily: "Inter, sans-serif",
                            color: "rgb(185, 28, 28)",
                            fontSize: "14px",
                        }}
                    >
                        Oops! Something went wrong, please try again
                    </p>
                </div>
                <button
                    className="newsletter-back-button"
                    type="button"
                    style={{
                        color: "#6b7280",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        margin: "10px auto",
                        textAlign: "center",
                        display: "none",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                    }}
                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                >
                    &larr; Back
                </button>
            </div>
        </div>
    );
}
