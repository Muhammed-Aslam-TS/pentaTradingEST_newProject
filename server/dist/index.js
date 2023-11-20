"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoDb_1 = __importDefault(require("./database/mongoDb"));
const morgan_1 = __importDefault(require("morgan"));
const user_1 = __importDefault(require("./routes/user"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
(0, mongoDb_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use("/uploads",express.static(path.join(process.cwd(), 'uploads')));
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'landing_page')));
app.use("/admin", express_1.default.static("landing_page"));
// app.use(express.static("landing_page"))
// app.use("/admin",)
// app.use(express.static(path.join(__dirname, "landing_page")))
const port = 3000;
app.use((0, morgan_1.default)("dev"));
const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/', user_1.default);
app.listen(port, () => {
    console.log(`server started port:${port}`);
});
