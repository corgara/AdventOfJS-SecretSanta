import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />

      <main className="rw-main">
        <Form onSubmit={onSubmit} className="mb=10">
          <div className="mx-auto max-w-[660px]">
            <HeaderWithRulers
              className={'mb-8 text-white'}
              heading={'RESET PASSWORD'}
            />

            <ShowHidePassword
              label="New Password"
              name="password"
              errorClassName="error"
              autoComplete="new-password"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />

            <div className="rw-button-group">
              <Submit>Submit</Submit>
            </div>
          </div>
        </Form>
        <div className="auth-links">
          <Link to={routes.signup()}>Need an Account?</Link>
        </div>
      </main>
    </>
  )
}

export default ResetPasswordPage
