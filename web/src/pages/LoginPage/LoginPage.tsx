import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="mx-auto max-w-[660px]">
            <HeaderWithRulers className={'mb-8 text-white'} heading={'LOGIN'} />
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

            <ShowHidePassword
              label="Password"
              name="password"
              errorClassName="error"
              autoComplete="current-password"
              placeholder=""
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />

            <FieldError name="password" className="error-message" />
            <div className="rw-button-group">
              <Submit>Login</Submit>
            </div>
          </div>
        </Form>
        <div className="auth-links">
          <Link to={routes.signup()}>Need an Account?</Link>
          {' ∙ '}
          <Link to={routes.forgotPassword()}>Forgot Password?</Link>
        </div>
      </main>
    </>
  )
}

export default LoginPage
