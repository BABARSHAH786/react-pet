const Popular = ()=>{
    return (
        <div className="">
            <section id="collections">
        <h2>Collections</h2>
        <ul>
            <li>
                <figure className="color7" data-aos="zoom-out-down">
                    <img src="img/pop-art.jpg" alt="Pop Art: This must be the place" />
                    <figcaption><a href="#">Pop Art</a></figcaption>
                </figure>
            </li>
            <li>
                <figure className="color2">
                    <img src="img/abstract.jpg" alt="Abstract: grey and green squares." />
                    <figcaption><a href="#">Abstract</a></figcaption>
                </figure>
            </li>
            <li className=" animate_animated animate__bounce">
                <figure className="color6">
                    <img src="img/vivid.jpg" alt="Tree on island in lake with purple sunrise." />
                    <figcaption><a href="#">Vivid</a></figcaption>
                </figure>
            </li>
            <li>
                <figure className="color8 wow animate__animated animate__bounce">
                    <img src="img/music.jpg" alt="Music: guitar leaning against wall." />
                    <figcaption><a href="#">Music</a></figcaption>
                </figure>
            </li>
            <li>
                <figure className="color4" data-aos="flip-right">
                    <img src="img/vehicles.jpg" alt="Vehicles: 1930's car on street." />
                    <figcaption><a href="#">Vehicles</a></figcaption>
                </figure>
            </li>
            <li>
                <figure className="color3 " data-aos="zoom-in">
                    <img src="img/landscape.jpg" alt="Landscape: moonrise over tree-covered mountains." />
                    <figcaption><a href="#">Landscape</a></figcaption>
                </figure>
            </li>
        </ul>
    </section>
      

        </div>
    )
}
export default Popular;