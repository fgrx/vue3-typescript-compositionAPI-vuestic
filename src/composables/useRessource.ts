import axios from "axios"
import { ref, computed } from 'vue'
import { IRessource } from '@/interfaces/IRessource'



export default function () {

  const ressource = ref({
    media: "",
    title: "",
    image: "",
    url: "",
    lang: "",
    rating: 0,
    isTop: false,
    date: "",
    isValid:false,
    description:""
  } as IRessource)


  const typeInFrench = computed((): string => {
    switch (ressource.value.media) {
      case "book":
        return "Livre";
      case "video":
        return "Vidéo";
      default:
        return "Article";
    }
  })

  const dateInFrench = computed((): string => {
    return new Date(ressource.value.date).toLocaleDateString();
  })

  return {
    ressource, typeInFrench, dateInFrench

  }
}
