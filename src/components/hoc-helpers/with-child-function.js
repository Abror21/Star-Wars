const withChildFunction = (children) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {children}
            </Wrapper>
        )
    }
};

export default withChildFunction;