import "./gallery.css";

export function Profile(){
    return(           
        <img src="https://smilinguido.com.br/wp-content/uploads/2021/08/SMILIGUIDO-04.png"
        alt="Smilinguido" className="smilinguido-profile-exe3"/>
    );
}

export default function Gallery(){
return(
    <section className="align-gallery-exe3">
        <Profile/>
        <Profile/>
        <Profile/>
    </section>
);
}