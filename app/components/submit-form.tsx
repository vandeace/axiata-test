import { Button } from "@/components/ui/button"
import { TPostForm, TPostFormKeysUnion } from "@/types/post"
import { useFormContext } from "react-hook-form"

interface TSubmitForm {
  goToNextForm: (level: number) => void
  level: number
}

const SubmitForm = ({ level, goToNextForm }: TSubmitForm) => {
  const validationKeys = (level: number): TPostFormKeysUnion => {
    switch (level) {
      case 0:
        return ["title", "author"]
      case 1:
        return ["category", "summary"]
      case 2:
        return ["content"]
      default:
        return []
    }
  }

  const { trigger } = useFormContext<TPostForm>()

  const onNextLevel = async () => {
    if (level < 3) {
      const isValidationSuccess = await trigger(validationKeys(level), {
        shouldFocus: true,
      })
      if (isValidationSuccess) {
        goToNextForm(level + 1)
      }
    }
  }

  return (
    <div className="flex justify-end gap-x-4 ">
      <Button
        size="lg"
        variant="destructive"
        type="button"
        onClick={() => {
          if (level > 0) goToNextForm(level - 1)
        }}
      >
        Back
      </Button>
      <Button
        size="lg"
        variant="default"
        type={"button"}
        onClick={() => onNextLevel()}
      >
        {level < 3 ? "Next" : "Submit"}
      </Button>
    </div>
  )
}

export default SubmitForm
