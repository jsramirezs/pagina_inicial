<template>
	<v-row justify="center">
		<v-col md="4">
			<v-card>
				<v-card-title primary-title>
					<v-row justify="center">
						<h3>¡Bienvenido!</h3>
					</v-row>
				</v-card-title>
				<v-card-text>
					<v-container grid-list-xs>
						<v-row>
							<p>Ingreso a chat sobre financiamiento de su factura</p>
						</v-row>
						<v-row justify="center">
							<v-btn v-on:click="OpenChat" color="success">ingresar</v-btn>
						</v-row>
					</v-container>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "WelcomeCard",
	methods: {
		OpenChat: function() {
			this.$router.push("/chat");
		}
	}
};
</script>

<style>
</style>