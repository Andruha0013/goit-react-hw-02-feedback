import css from "./FeedbackOptions.module.css";
const FeedBackOptions=({onLeaveFeedback})=>{
    return (
        <ul className={css.feedback__options}>
            <li className={css.feedback__optionsItem}>
                <button className={css.feedback__optionsBtn} type="button" name="goodBtn" onClick={onLeaveFeedback}>Good</button>
            </li>
            <li className={css.feedback__optionsItem}>
                <button className={css.feedback__optionsBtn} type="button" name="neutralBtn" onClick={onLeaveFeedback}>Neutral</button>
            </li>
            <li className={css.feedback__optionsItem}>
                <button className={css.feedback__optionsBtn} type="button" name="badBtn" onClick={onLeaveFeedback}>Bad</button>
            </li>
        </ul>
    );
}

export default FeedBackOptions;