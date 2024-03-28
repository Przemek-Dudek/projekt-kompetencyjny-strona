<script setup>
    
</script>

<template>
    <div class="container">
        <div class="panel">
            
            <div class="panel_credentials">
                <form action="">
                    <div class="form_block">
                        <h2>Sign in</h2>
                        <p>Enter your credential to login into system</p>
                    </div>

                    <div class="form_block">
                        <label>Name*</label><br>
                        <input type="email" placeholder="Enter your email">
                    </div>

                    <div class="form_block">
                        <label>Password*</label><br>
                        <input type="password" placeholder="Enter your password">
                    </div>

                    <button>Log in</button>
                </form>
            </div>

            <div class="panel_image"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        background: var(--b-gray);

        .panel {
            width: 80vw;
            height: 40vw;
            display: grid;
            grid-template: 1fr / repeat(2, 0.5fr);
            background: var(--b-white);
            border-radius: 1vw;
            overflow: hidden;

            &_credentials {
                display: grid;
                place-items: center;

                form {

                    .form_block {
                        margin: 1vw 0;

                        h2 {
                            font-size: 2vw;
                        }

                        p, label{
                            font-size: 1vw;
                            padding: 1vw 0;
                            font-weight: 300;
                        }

                        input {
                            width: 20vw;
                            padding: 0.5vw;
                            font-size: 1vw;
                            background: var(--b-white);
                            border: 0.1vw solid var(--b-gray);
                            margin: 0.5vw 0;
                            border-radius: 0.3vw;
                        }
                    }

                    button {
                        width: 20vw;
                        padding: 0.5vw 0;
                        border: none;
                        font-size: 1vw;
                        color: var(--b-white);
                        background: var(--b-black);
                        border-radius: 0.3vw;
                    }
                }
            }

            &_image {
                background-image: url(./../public/webp/books.webp);
                background-size: contain;
                background-position: center;
            }
        }
    }
</style>
