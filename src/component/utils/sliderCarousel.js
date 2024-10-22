// const NextArrow = ({ onClick }) => (
//     <div
//         aria-hidden="true"
//         className="bg-white text-[#6F6F6F] border border-[#DADADA] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute top-[50%] -right-12 shadow-sm"
//         onClick={onClick}
//     >
//         ❯
//     </div>
// );

// const PrevArrow = ({ onClick }) => (
//     <div
//         aria-hidden="true"
//         className="bg-white text-[#6F6F6F] border border-[#DADADA] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute top-[50%] -left-12 shadow-sm"
//         onClick={onClick}
//     >
//         ❮
//     </div>
// );

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

{/* <div class="slick-slider rounded-[10px] slick-initialized" dir="ltr">
    <button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;"> Previous</button>

    <div class="slick-list">
        <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 353px;"><div><div class="rounded-[11px]"><div class="rounded-[11px] py-9 px-5 bg-white cursor-pointer"><div class="flex flex-col items-center px-5"><div class="w-[150px] h-[150px] rounded-full overflow-hidden flexjustify-center"><img src="https://s3-alpha-sig.figma.com/img/d6a6/fffd/2100d987b5946aa1df33cf0f6c34a418?Expires=1730678400&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=LOm6dnYet6jpAKmbCYFb74vdC~rtxQmFdgYhDSmt71gr1~qo7MF4EGcjdHi8aOxRc4qu1GW5X4w1G7MTdOyXx76TjqEZbKLOchyCPlU0QlRVEdZfR9jn9mLR2OXDPdP6vMqBcQ0surXNA0okBmrNFPJ-QpkY5avXUulsg0thv7X4i3iVkktQ65vGc2g9bh6MFDdwO4u~FW4x4YuAQJ28Ght6ksLYtb4rHciYFxyxpKfkcBQdWnHGrCcDfAhw3wt2DvpZ2SR6pYRcHH41uy76cUc6GMsiBI2olZbCcvmj9FCMjHHhcSrxhHbitVphHkg4Sh6~qRGnkrx23jCi8~GIrg__" alt="John Doe" class="undefined"></div><div class="flex flex-col items-center"><h2 class="text-2xl font-bold">John Doe</h2><p class="text-lg font-semibold">Chief Marketing Officer</p><p class="text-base font-normal text-[#6B6B6B]">Acme Corp</p></div></div></div></div></div></div>
    </div>

    <button type="button" data-role="none" class="slick-arrow slick-next" style="display: block;"> Next</button></div> */}