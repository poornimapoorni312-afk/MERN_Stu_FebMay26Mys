import PropTypes from "prop-types";
// Props validation
// npm install prop-types
function Profile({name,age}){
    return(
        <div className="card">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}
Profile.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
};
export function PropTypesDemo(){
    return(
        <>
          <Profile name="Poorni" age={21} />
        </>
    );
}