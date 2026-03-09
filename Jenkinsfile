@Library('ecommerce-shared-lib') _

microservicePipeline(
    image: "gracekluender/product-service",
    buildCommand: """
        npm install
        npm run lint
    """,
    testCommand: "npm test"
)