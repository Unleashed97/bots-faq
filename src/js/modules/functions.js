export const toggleSidebarMenu = () => {
    const captionList = document.querySelectorAll('.nav__item-caption')

    if (captionList) {
        captionList.forEach((caption) =>
            caption.addEventListener('click', () => {
                const captionParentItem = caption.closest('.nav__item')

                captionParentItem.classList.toggle('active')

                const captionBottomList =
                    captionParentItem.querySelector('.nav__list')

                // if (!captionBottomList.classList.contains('hidden')) {

                // }

                // captionBottomList.classList.toggle('hidden')
            }),
        )
    }
}

// export const handleBurger = () => {
//     const burgerBtn = document.querySelector('.burger')

//     burgerBtn.addEventListener('click', () => {
//         burgerBtn.classList.toggle('active')
//     })
// }
