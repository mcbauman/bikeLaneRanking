import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const thisLane = ref({ArtDesRadwegs:""})
    const ratingValue = ref({
    safety:0,speed:0,comfort:0
  })

  function calculate(){
    console.log("Exec");
    ratingValue.value.safety=thisLane.value.ArtDesRadwegs.werte[0]
    +thisLane.value.weiteDesWegsProRichtung.werte[0]
    +thisLane.value.Belag.werte[0]
    +thisLane.value.Belagszustand.werte[0]
    +thisLane.value.VerkehrsaufkommenNebenDemRadweg.werte[0]
    +thisLane.value.VerkehrsaufkommenAufDemRadweg.werte[0]
    ratingValue.value.speed=thisLane.value.ArtDesRadwegs.werte[1]
    +thisLane.value.weiteDesWegsProRichtung.werte[1]
    +thisLane.value.Belag.werte[1]
    +thisLane.value.Belagszustand.werte[1]
    +thisLane.value.VerkehrsaufkommenNebenDemRadweg.werte[1]
    +thisLane.value.VerkehrsaufkommenAufDemRadweg.werte[1]
    ratingValue.value.comfort=thisLane.value.ArtDesRadwegs.werte[2]
    +thisLane.value.weiteDesWegsProRichtung.werte[2]
    +thisLane.value.Belag.werte[2]
    +thisLane.value.Belagszustand.werte[2]
    +thisLane.value.VerkehrsaufkommenNebenDemRadweg.werte[2]
    +thisLane.value.VerkehrsaufkommenAufDemRadweg.werte[2]
  }

  function updateRatingValue(safety,speed,comfort){
    ratingValue.value.safety=ratingValue.value.safety+safety
    ratingValue.value.speed=ratingValue.value.speed+speed
    ratingValue.value.comfort=ratingValue.value.comfort+comfort
  }
  return { thisLane,ratingValue,updateRatingValue,calculate }
})
