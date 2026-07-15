import type * as MktAgiApi from "../index.js";
export interface AnthropicTool {
    description?: string | undefined;
    input_schema?: MktAgiApi.AnthropicInputSchema | undefined;
    name?: string | undefined;
}
