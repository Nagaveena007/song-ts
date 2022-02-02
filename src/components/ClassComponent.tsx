import { Component } from 'react'

// the props object in a TypeScript react component by default is {}
// props are an object in a React Component...
// ...so let's write an interface for them!

interface ClassComponentProps {
  title: string // this is a mandatory prop
  subTitle?: string // this is an optional prop
}

interface ClassComponentState {
  counter: number
  isLoading: boolean
}

// < > <-- in TS this is called a Type Argument

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state: ClassComponentState = {
    counter: 0,
    isLoading: false,
  }

  render() {
    return (
      <>
        {this.state.counter}
        <h1
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 })
          }}
        >
          {this.props.title}
        </h1>
        <h3>{this.props.subTitle?.toUpperCase() || 'no subtitle'}</h3>
        {/* ? in the line above is called OPTIONAL CHAINING */}
      </>
    )
  }
}

export default ClassComponent
