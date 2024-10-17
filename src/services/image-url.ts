import noImage from '../asserts/no-image-placeholder-6f3882e0.webp'

const getCroppedImage = (url:string)=>{
    if(url==null) return noImage;
    const target = 'media/';
    const index = url.indexOf(target)+'media/'.length;
    return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}

export default getCroppedImage;