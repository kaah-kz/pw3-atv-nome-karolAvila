function Information ({ author, traductor, format, assessments }) {
    return (
        <div className="info">
            <h3>{author}, {traductor}, {format}, {assessments}</h3>
        </div>
    );
}

export default Information;