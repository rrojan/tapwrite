import * as React from 'react'
import './globals.css'
import { Editor } from './components/Tapwrite'
import { AppContextProvider } from './context'
import { TiptapEditorUtils } from './utils/tiptapEditorUtils'

export interface NotionLikeProps {
  uploadFn?: (file: File) => Promise<string | undefined>
  getContent: (content: string) => void
  content: string
  readonly?: boolean
  className?: string
  placeholder?: string
  onFocus?: () => void
  suggestions?: any
  isTextInput?: boolean
  onBlur?: () => void
  editorClass: string
  handleEditorAttachments?: (file: File) => Promise<void>
  deleteEditorAttachments?: (id: string) => Promise<void>
  disablePasteAndDnd?: boolean
}

export const Tapwrite = ({
  uploadFn,
  getContent,
  content,
  readonly,
  className,
  placeholder,
  onFocus,
  isTextInput = false,
  suggestions,
  onBlur,
  editorClass,
  deleteEditorAttachments,
  disablePasteAndDnd
}: NotionLikeProps) => {
  return (
    <AppContextProvider>
      <Editor
        uploadFn={uploadFn}
        getContent={getContent}
        content={content}
        readonly={readonly}
        className={className}
        placeholder={placeholder}
        onFocus={onFocus}
        suggestions={suggestions}
        isTextInput={isTextInput}
        onBlur={onBlur}
        editorClass={editorClass}
        deleteEditorAttachments={deleteEditorAttachments}
        disablePasteAndDnd={disablePasteAndDnd}
      />
    </AppContextProvider>
  )
}

export { TiptapEditorUtils }
