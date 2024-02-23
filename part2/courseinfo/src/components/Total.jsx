const Total = ({parts}) => {
    let totalParts = parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <p><strong>Total of {totalParts} exercises</strong></p>
    )
}

export default Total