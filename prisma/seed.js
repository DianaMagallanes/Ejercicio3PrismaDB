const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java"
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node"
            },
        });

        const woopa4 = await prisma.explorer.upsert({
            where: { name: "Woopa 4" },
            update: {},
            create: {
                name: "Woopa 4",
                username: "ajolonauta4",
                mission: "Java"
            },
        });

        const woopa5 = await prisma.explorer.upsert({
            where: { name: "Woopa 5" },
            update: {},
            create: {
                name: "Woopa 5",
                username: "ajolonauta5",
                mission: "Node"
            },
        });

        const mission1 = await prisma.mission.upsert({
            where: { name: "Mission Node" },
            update: {},
            create: {
                name: "Mission Node",
                lang: "Spanish",
                missionCommander: "Carlo Gilmar",
                enrollments:500,
                hasCertification: false
            },
        });

        const mission2 = await prisma.mission.upsert({
            where: { name: "Mission Java" },
            update: {},
            create: {
                name: "Mission Java",
                lang: "Spanish",
                missionCommander: "Fernanda Ochoa",
                enrollments:500,
                hasCertification: false
            },
        });

        const missionCommander1 = await prisma.missionCommander.upsert({
            where: { name: "Carlo Gilmar" },
            update: {},
            create: {
                name: "Carlo Gilmar",
                username: "CarloGilmar",
                mainStack: "Elixir",
                currentEnrollment: true,
                hasAzureCertification: true
            },
        });

        const missionCommander2 = await prisma.missionCommander.upsert({
            where: { name: "Fernanda Ochoa" },
            update: {},
            create: {
                name: "Fernanda Ochoa",
                username: "FernandaOchoa",
                mainStack: "Java",
                currentEnrollment: true,
                hasAzureCertification: true
            },
        });

        console.log("Create explorers/missions/mc");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();