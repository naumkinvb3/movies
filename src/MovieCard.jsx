import fenix from './assets/fenix.jpg'

const MovieCard = ({
    name,
    rating,
    decription
}) => {
    return (
        <div className='movie_card'>
            <img id='movie_img' src={fenix} alt="" />
            <div id='movie_info'>
                <p id='movie_name'>{name}</p>
                <div id='osenka'>
                    <p id='osenka_text'>Оценка</p>
                    <p id='osenka_count'>{rating}</p>
                </div>
                <p id='decription'>
                    {decription}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
