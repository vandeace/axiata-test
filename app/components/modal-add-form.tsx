"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TAddPostScheme, TPostForm } from "@/types/post"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import CategorySummaryForm from "./category-summary-form"
import MetaDataForm from "./metadata-form"
import SubmitForm from "./submit-form"
import ContentForm from "./content-form"
import PreviewForm from "./preview-form"
import { useCreatePost } from "@/hooks/api/create-post"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from "next/navigation"

const ModalAddForm = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [showModal, setShowModal] = React.useState(false)
  const [level, setLevel] = React.useState(0)

  const formMethods = useForm<TPostForm>({
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TAddPostScheme),
  })

  const { mutate } = useCreatePost()

  const { handleSubmit } = formMethods

  const renderForm = () => {
    switch (level) {
      case 0:
        return <MetaDataForm />
      case 1:
        return <CategorySummaryForm />
      case 2:
        return <ContentForm />
      case 3:
        return <PreviewForm />
      default:
        return undefined
    }
  }

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: (data) => {
        setShowModal(false)
        toast({
          title: "Post Created Successfully",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => router.push(`/post/${data.id}`)}
            >
              Check The Post
            </ToastAction>
          ),
        })
      },
    })
  })

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger className="rounded-sm bg-black px-4 text-white">
        add post
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
        </DialogHeader>
        <FormProvider {...formMethods}>
          <form onSubmit={onSubmit}>
            <div>
              {renderForm()}
              {level < 3 ? (
                <SubmitForm level={level} goToNextForm={setLevel} />
              ) : (
                <div className="flex justify-end gap-x-4 ">
                  <Button
                    size="lg"
                    variant="destructive"
                    type="button"
                    onClick={() => {
                      setLevel(level - 1)
                    }}
                  >
                    Back
                  </Button>
                  <Button size="lg" variant="default" type="submit">
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default ModalAddForm
