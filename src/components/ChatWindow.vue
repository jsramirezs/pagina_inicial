<template>
	<div>
		<v-row justify="center" align="center">
			<v-col lg="6">
				<v-card>
					<v-card-title class="primary white--text">
						<h3>Chat con MaxiBot</h3>
					</v-card-title>
					<v-card-text>
						<v-row justify="center">
							<v-col>
								<v-textarea
									v-model="chatWind"
									no-resize
									rounded
									readonly
									background-color="back"
									height="200"
								></v-textarea>
							</v-col>
						</v-row>
						<v-row justify="end">
							<v-col lg="8">
								<v-text-field name="mensaje" label="Mensaje" reverse id="mensaje" multi-line></v-text-field>
							</v-col>
							<v-col lg="2" align-self="center">
								<v-btn color="accent" rounded v-on:click="agregar">
									<v-icon dark>mdi-send</v-icon>
								</v-btn>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data: () => ({
		chatWind: `Maxi dice: Hola!\n\n`
	}),
	methods: {
		agregar: function() {
			this.chatWind += `Maxi dice: Hola!\n\n`;
		}
	}
};
</script>

<style>
</style>