const checkPerformance = (myFunction) => {
    const start = performance.now();

    console.log(`Result is:\n${myFunction}`);

    const end = performance.now();
    console.log(`\nExecution time:\n${end - start} ms`);
};

export default checkPerformance;