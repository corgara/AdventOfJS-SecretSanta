import { useEffect, useRef } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { email: string }) => {
    const response = await forgotPassword(data.email)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="rw-main">
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="mx-auto max-w-[660px]">
            <HeaderWithRulers
              className={'mb-8 text-white'}
              heading={'FOROGT PASSWORD?'}
            />

            <div className="field">
              <Label name="email" errorClassName="error">
                Email
              </Label>
              <EmailField
                name="email"
                errorClassName="error"
                placeholder=""
                ref={emailRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
              <FieldError name="email" className="error-message" />
            </div>

            <div className="rw-button-group">
              <Submit>Submit</Submit>
            </div>
          </div>
        </Form>
        <div className="auth-links">
          <Link to={routes.login()}>Ready to Login?</Link>
        </div>
      </main>
    </>
  )
}

export default ForgotPasswordPage
