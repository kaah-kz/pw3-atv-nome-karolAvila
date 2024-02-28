function BookDetails({ title, subtitle, description }) {
    return (
      <div className="details">
        <h2>{title}</h2>
        <div className="subtitle">
          <p>{subtitle}</p>
        </div>
        <p className="desc">{description}</p>
      </div>
    );
  }

export default BookDetails;