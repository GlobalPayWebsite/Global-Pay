function Spacing({ height = "60px" }: { height: string }) {
    return (
        <div
            style={{
                width: '100%',
                height,
            }}
        ></div>
    );
}

export default Spacing;
