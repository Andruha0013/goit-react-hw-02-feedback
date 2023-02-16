import css from "./Section.module.css";
const Section=(props)=>{
    return (
        <section className={css.feedback__section}>
            <h2 className={css.feedback__header}>{props.title}</h2>
            {props.children}
        </section>
    );
}

export default Section;