import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGameConfiguration = defineStore("gameConfiguration", () => {
  const totalNumberQuestions = ref(1);
  const questionCategory = ref();
  const questionDifficulty = ref();
  const questionType = ref();

  /**
   * Función para almacenar los cambios
   */
  function saveConfiguration(
    numberOfQuestions: any,
    category: any,
    difficulty: any,
    questionType: any
  ) {
    totalNumberQuestions.value = numberOfQuestions;
    questionCategory.value = category;
    questionDifficulty.value = difficulty;
    questionType.value = questionType;

    console.log(totalNumberQuestions.value);
    console.log(questionCategory.value);
    console.log(questionDifficulty.value);
    console.log(questionType.value);
  }

  /**
   * Función para devolver una dificultad aleatoria
   */
  function giveAleatoryDifficulty() {
    if (questionDifficulty.value.number != 0) {
      return Math.random() * questionDifficulty.value.number;
    }
  }

  /**
   * Función para devolver una categoría
   * aleatoria de entre las que ha seleccionado el usuario
   */
  function giveAleatoryCategory() {
    return Math.random() * questionCategory.value.size();
  }

  return {
    totalNumberQuestions,
    questionCategory,
    questionDifficulty,
    saveConfiguration,
  };
});
