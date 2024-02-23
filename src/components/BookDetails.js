function BookDetails ({ title, author, description }) {
    return(
        <div className="details">
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    );
}

export default BookDetails;