import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  FieldError,
  Submit,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  // focus on name box on page load
  const nameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      name: data.name,
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="mx-auto max-w-[660px]">
            <HeaderWithRulers
              className={'mb-8 text-white'}
              heading={'SIGN UP'}
            />

            <div className="field relative">
              <Label name="name" errorClassName="error">
                Name
              </Label>
              <TextField
                name="name"
                errorClassName="error"
                placeholder=""
                validation={{
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                }}
              />
              <FieldError name="name" className="error-message" />
            </div>

            <div className="field relative">
              <Label name="email" errorClassName="error">
                Email
              </Label>
              <EmailField
                name="email"
                errorClassName="error"
                placeholder=""
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
              <Submit>Sign Up</Submit>
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

export default SignupPage
