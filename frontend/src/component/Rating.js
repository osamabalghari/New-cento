const rating = {
    render: (probs) =>{
if (!probs.value) {
    return `<div></div>`;
}
return `
<div class="rating">
<span>
<i class="${probs.value >=1 ?'fa-solid fa-star': probs.value >=0.5 ? 'class="fa-solid fa-star-half' :'fa-solid fa-star-half-stroke'}">
</i>
</span>
<span>
<i class="${probs.value >=2 ?'fa-solid fa-star': probs.value >=1.5 ? 'class="fa-solid fa-star-half' :'fa-solid fa-star-half-stroke'}">
</i>
</span>
<span>
<i class="${probs.value >=3 ?'fa-solid fa-star': probs.value >=2.5 ? 'class="fa-solid fa-star-half' :'fa-solid fa-star-half-stroke'}">
</i>
</span>
<span>
<i class="${probs.value >=4 ?'fa-solid fa-star': probs.value >=3.5 ? 'class="fa-solid fa-star-half' :'fa-solid fa-star-half-stroke'}">
</i>
</span>
<span>
<i class="${probs.value >=5 ?'fa-solid fa-star': probs.value >=4.5 ? 'class="fa-solid fa-star-half' :'fa-solid fa-star-half-stroke'}">
</i>
</span>
<span>${
    probs.text
     || ''
}
</span>
</div>
`
    }
}
export default rating;