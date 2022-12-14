export const toggleSidebarMenu = () => {
    const captionList = document.querySelectorAll('.nav__item-caption')

    if (captionList) {
        captionList.forEach((caption) =>
            caption.addEventListener('click', () => {
                const captionParentItem = caption.closest('.nav__item')

                captionParentItem.classList.toggle('active')
            }),
        )
    }
}
