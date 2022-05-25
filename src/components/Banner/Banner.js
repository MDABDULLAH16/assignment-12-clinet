import React from 'react';

const Banner = () => {
    return (
        <div class="carousel  h-screen w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/mechanic-servicing-car_1170-1689.jpg?size=626&ext=jpg&ga=GA1.2.1496146932.1653373031" class="w-full h-screen " />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle"></a>
                    <a href="#slide2" class="btn btn-circle"></a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19705.jpg?t=st=1653373049~exp=1653373649~hmac=4050abf1df608a1c54cb181f451289ad10a4cc80a70f2b8bca569911cbf5a9d86" class="w-full h-screen" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle"></a>
                    <a href="#slide3" class="btn btn-circle"></a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/photos/auto-mechanic-working-and-repair-on-car-engine-in-mechanics-garage-picture-id1330984026?k=20&m=1330984026&s=612x612&w=0&h=u8lwh972NnkHlK6m3hWENOJgdYpl0qv79UeYzta9isA=" class="w-full h-screen" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle"></a>
                    <a href="#slide4" class="btn btn-circle"></a>
                </div>
            </div>

        </div>
    );
};

export default Banner;