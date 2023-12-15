"use client";


import React , { useEffect , useState } from "react";
import { useSettings } from "@/hooks/use-settings";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";


const SettingsModal = () =>{
    const settings = useSettings();
    const {user} = useUser();

    const [isSubmitting , setIsSubmitting] = useState(false);

    const { isOpen , onClose , onToggle } = settings;


    useEffect(()=>{
        const down = (e : KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)){
                e.preventDefault();
                onToggle();
            }
        };

        document.addEventListener("keydown", down);
        return ()=> document.removeEventListener("keydown", down);

    },[onToggle]);

    const onSubmit = async()=>{
        setIsSubmitting(true);

        try{
            const {data} = await axios.post("/api/stripe/manage",{
                email : user?.emailAddresses[0].emailAddress,

            });
            if(!data.status){
                setIsSubmitting(false);
                toast.error("You are not subscribed to any plans!");
                return;
            }
            window.open(data.url,"_self");
            setIsSubmitting(false);
        }catch(error){
            setIsSubmitting(false);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return(
        <div></div>
    );
}