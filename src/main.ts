import { CliApp } from "./interfaces/cli/index";


new CliApp().run().catch((error)=>{
    console.error("Fatal error:", error instanceof Error ? error.message : error);
    process.exit(1);
})